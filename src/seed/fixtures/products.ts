const products = [
  {
    title: 'CocaCola 600 ml',
    description: 'Bebida sabor cola de 600 ml',
    price: 18,
    image_url:
      'https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00000007500761L.jpg',
  },
  {
    title: 'Fanta 3L',
    description: 'Refresco sabor naranja de 3 L',
    price: 34,
    image_url:
      'https://anyhow.mx/wp-content/uploads/2021/06/Fanta-naranja-3-Lt-anyhow.jpg',
  },
  {
    title: 'Squirt 2L',
    description: 'Refreco sabor toronja 2L',
    price: 23,
    image_url:
      'https://calimaxmx.vtexassets.com/arquivos/ids/183820/7501071120305.png?v=637312258308870000',
  },
  {
    title: 'Sprite 3 L',
    description: 'Refresco Sprite 3 L',
    price: 34,
    image_url:
      'https://www.merqueya.com/wp-content/uploads/2021/04/sprite3l.png',
  },
  {
    title: 'Schweppes 1L',
    description: 'Refresco Schweppes sabor ginger ale botella de 1 L',
    price: 18,
    image_url: 'https://m.media-amazon.com/images/I/51-dD0VtHFL._AC_SX385_.jpg',
  },
  {
    title: 'Sidral Mundet 600ml',
    description: 'Refresco Sidral Mundet sabor manzana de 600 ml',
    price: 15,
    image_url:
      'https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1108557_A_1280_AL.jpg',
  },
  {
    title: 'Mirinda 2L',
    description: 'Refresco Mirinda sabor naranja 2 l',
    price: 23,
    image_url:
      'https://media.justo.mx/__sized__/products/750103134505-thumbnail-255x255-70.jpg',
  },
  {
    title: 'Dr. Pepper 600 ml',
    description: 'Refresco Dr. Pepper botella de 600 ml',
    price: 14,
    image_url:
      'https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1082701_A_1280_AL.jpg',
  },
  {
    title: 'Señorial 2L',
    description: 'Refresco Señorial sabor sangría 2 l',
    price: 34.5,
    image_url:
      'https://http2.mlstatic.com/D_NQ_NP_735283-MLM49360800529_032022-O.jpg',
  },
  {
    title: 'Canada Dry 1L',
    description: 'Refresco Canada Dry sabor ginger ale 1 l',
    price: 15,
    image_url:
      'https://trico.com.mx/wp-content/uploads/2020/09/ref_canadry_1.jpg',
  },
  {
    title: 'Chaparritas 250 ml',
    description: 'Refresco Chaparritas sabor mandarina botella de 250 ml',
    price: 8.5,
    image_url:
      'https://www.heb.com.mx/media/catalog/product/cache/9f5ec31302878493d9ed0ac40a398e12/7/2/721644_image.png',
  },
  {
    title: 'Crush 2l',
    description: 'Refresco Crush sabor lima limón 2 l',
    price: 19,
    image_url: 'https://subodega.mx/articulo/41154/01.webp',
  },
  {
    title: 'malta Maltín Polar 355 ml c/u',
    description:
      'Bebida de malta Maltín Polar sin alcohol 6 botellas de 355 ml c/u',
    price: 185,
    image_url:
      'https://http2.mlstatic.com/D_NQ_NP_958224-MLM45381004759_032021-V.jpg',
  },
  {
    title: 'Peñafiel Adas 600M',
    description: 'Agua mineral Peñafiel Adas ligera sabor naranja 600 ml',
    price: 13,
    image_url:
      'https://media.justo.mx/__sized__/products/Penafiel_Agua_mineral_ligera_Naranjada_botella_600ml-thumbnail-255x255-70.jpg',
  },
  {
    title: 'Agua mineral 1L',
    description: 'Agua mineral Peñafiel 1 l',
    price: 13,
    image_url:
      'https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750107383050L4.jpg',
  },
  {
    title: 'Jarritos 2l',
    description: 'Refresco Jarritos sabor limón 2 l',
    price: 20,
    image_url:
      'https://cdn.shopify.com/s/files/1/0481/7387/5367/products/jarrlimon_large.jpg?v=1608827244',
  },
  {
    title: 'Coca Cola 3L',
    description: 'Refresco Coca Cola botella de 3 l',
    price: 42,
    image_url:
      'http://cdn.shopify.com/s/files/1/0607/1710/5395/products/Foto_189.jpg?v=1643739275',
  },
  {
    title: 'Coca Cola 12 latas de 355 ml c/u',
    description: 'Refresco Coca Cola 12 latas de 355 ml c/u',
    price: 165,
    image_url:
      'https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750105534942L.jpg',
  },
  {
    title: 'Coca Cola sin azúcar 2.5 L',
    description: 'Refresco Coca Cola sin azúcar de 2.5 l',
    price: 25,
    image_url:
      'https://www.heb.com.mx/media/catalog/product/cache/9f5ec31302878493d9ed0ac40a398e12/6/0/607674_image-1663033324.png',
  },
  {
    title: 'Coca Cola light 1L',
    description: 'Refresco Coca Cola light botella de 1 l',
    price: 22,
    image_url:
      'https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750105530534L4.jpg?odnHeight=80&odnWidth=80&odnBg=FFFFFF',
  },
];

export default products;
