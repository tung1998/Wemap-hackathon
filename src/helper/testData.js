export {
  location3Star,
  location2Star,
  location1Star,
}


//Cảnh báo lỗi
const location3Star = [{
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [105.851421,21.029015 ]
    },
    properties: {
      title: "Hồ Gươm",
      imgName: '../../../assets/img/location/hồ gươm.jpg',
      className: 'marker big',
      description: "Đại học quốc gia Hà Nội"
    }
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [ 105.794740,21.037844]
    },
    properties: {
      title: "chùa Hà",
      imgName: '../../../assets/img/location/250px-ChuaHa_TamQuan.jpg',
      className: 'marker big',
      description: "San Francisco, California"
    }
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [ 105.859584,21.043696 ]
    },
    properties: {
      title: "cầu long biên",
      imgName: '../../../assets/img/location/cầu long biên.jpg',
      className: 'marker big',
      description: "San Francisco, California"
    }
  }
]


const location2Star = [{
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [105.835255,21.078522]
    },
    properties: {
      title: "bãi đá sông hồng",
      imgName: '../../../assets/img/location/bãi đá sông hồng.jpg',
      className: 'marker medium',
      description: "Đại học quốc gia Hà Nội"
    }
},
{
    type: "Feature",
    geometry: {
        type: "Point",
        coordinates: [105.801010,21.023647]
    },
    properties: {
        title: "tiểu venice",
        imgName: '../../../assets/img/location/tiểu venice.jpg',
        className: 'marker medium',
        description: "San Francisco, California"
    }
  },
  {
    type: "Feature",
    geometry: {
        type: "Point",
        coordinates: [ 105.851464,21.010022]
    },
    properties: {
        title: "lofita",
        imgName: '../../../assets/img/location/lofita338 phố huế.jpg',
        className: 'marker medium',
        description: "San Francisco, California"
    }
  }
]


const location1Star = [{
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [105.821017,21.093331]
    },
    properties: {
      title: "cầu nhật tân",
      imgName: '../../../assets/img/location/cầu nhật tân.jpg',
      className: 'marker small',
      description: "Đại học quốc gia Hà Nội"
    }
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [ 105.839266,21.035416]
    },
    properties: {
      title: "đường hoàng diệu",
      imgName: '../../../assets/img/location/hoàng diệu.jpg',
      className: 'marker small',
      description: "San Francisco, California"
    }
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [ 105.846731, 21.038283]
    },
    properties: {
      title: "phố bích họa phùng hưng",
      imgName: '../../../assets/img/location/phố bích họa phùng hưng.jpg',
      className: 'marker small',
      description: "San Francisco, California"
    }
  }
]
