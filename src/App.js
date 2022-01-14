import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { retrieveProductsData } from './redux/shop/shop.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import './App.css';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount = async() => {
    const { setCurrentUser, retrieveProductsData } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapShot => {
        setCurrentUser({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data()
            }
         });
        })
    } else {
    setCurrentUser(userAuth);
    }
  })


  //Retrieve products data from STRIPE API
  try {
    const response = await fetch("https://x61cibvgyk.execute-api.us-east-1.amazonaws.com/dev/")
    const json = await response.json()
    //console.log(json.body.data)
    retrieveProductsData(json.body.data)
    }catch(err){
      console.log(err)
    }

  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route exact path='/checkout' component={CheckoutPage}/>
      <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)}/>
      </Switch>
    </div>
  )};
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  retrieveProductsData: products => dispatch(retrieveProductsData(products))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);