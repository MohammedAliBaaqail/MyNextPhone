type brand = {
   
        id: string,
        name: string,
        devices: number
     
}

type deviceListByBrand ={
    id: string,
    name: string,
    img: string,
    description: string
}

type deviceDetails = {
    name: string,
    img: string,
    quickSpec: [
      {
        name: string,
        value: string
      }
    ],
    detailSpec: [

        {
            category: String,
            specifications: [
              { name: String, value: String },
              { name: String, value: String }
            ]
          },
          {
            category: String,
            specifications: [
              { name: String, value: String },
              { name: String, value: String }
            ]
          },
          {
            category: String,
            specifications: [
              { name: String, value: String },
              { name: String, value: String }
            ]
          },
          {
            category: String,
            specifications: [
              { name: String, value: String },
              { name: String, value: String }
            ]
          },
          {
            category: String,
            specifications: [
              { name: String, value: String },
              { name: String, value: String }
            ]
          },
          {
            category: String,
            specifications: [
              { name: String, value: String },
              { name: String, value: String }
            ]
          },
          {
            category: String,
            specifications: [
              { name: String, value: String },
              { name: String, value: String }
            ]
          },
          {
            category: String,
            specifications: [
              { name: String, value: String },
              { name: String, value: String }
            ]
          },
          {
            category: String,
            specifications: [
              { name: String, value: String },
              { name: String, value: String }
            ]
          },
        
      ]
  }

  type topDevices = [
    {
      category: string,
      list: [Array]
    },
    {
        category: string,
        list: [Array]
      }
  ]

  type searchedDevices = [
    {
      id: string,
      name: string,
      img: string,
      description: string
    }
  ]
  