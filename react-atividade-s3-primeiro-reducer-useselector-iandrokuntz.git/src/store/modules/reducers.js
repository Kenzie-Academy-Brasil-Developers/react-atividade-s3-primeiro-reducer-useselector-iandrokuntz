const initialState = [
    {
      name: "Banana",
      image:
        "http://d3ugyf2ht6aenh.cloudfront.net/stores/746/397/products/banana_caturra1-7e2b9a3f6b39b3309915220270001382-640-0.jpg",
    },
    {
      name: "Maçã",
      image:
        "https://d3ugyf2ht6aenh.cloudfront.net/stores/746/397/products/maca-argentina1-a86acef532d11addf315221676880019-1024-1024.jpg",
    },
    {
      name: "Uva",
      image:
        "https://scfoods.fbitsstatic.net/img/p/uva-red-globe-500g-70670/257172.jpg?w=800&h=800&v=no-change",
    },
  ];
  
  const fruitsReducer = (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default fruitsReducer;