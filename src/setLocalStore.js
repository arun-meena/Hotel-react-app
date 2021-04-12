const setLocalStore = (data) => {
    if(Object.entries(data).length) {
        const hotels = JSON.parse(localStorage.getItem('hotels')) || [];
        hotels.push(data)
        localStorage.setItem('hotels',JSON.stringify(hotels));
        console.log("hotel list", hotels);
    } 
}

export default setLocalStore;