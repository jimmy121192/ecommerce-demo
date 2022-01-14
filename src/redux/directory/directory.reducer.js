const INITIAL_STATE = {
    sections: [
        {
        title: "transmitters",
        imageUrl: "https://res.cloudinary.com/jimmytruong/image/upload/v1641376230/general/banner-products1_cd3b27.jpg",
        size: "large",
        id: 1,
        linkUrl: "shop/transmitters",
        },
        {
        title: "accessories",
        imageUrl: "https://res.cloudinary.com/jimmytruong/image/upload/v1641376468/general/raspberry_m2x15k.webp",
        size: "large",
        id: 2,
        linkUrl: "shop/accessories",
        },
    ],
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
        return state;
    }
}

export default directoryReducer;