type brand = {
   
        "id": string,
        "name": string,
        "devices": number
     
}

type deviceListByBrand ={
    "id": string,
    "name": string,
    "img": string,
    "description": string
}

type deviceDetails = {
    "name": string,
    "img": string,
    "quickSpec": [
      {
        "name": string,
        "value": string
      }
    ],
    "detailSpec": [
   

      { category: string, specifications: [Array] },
      { category: string, specifications: [Array] },
      { category: string, specifications: [Array] },
      { category: string, specifications: [Array] },
      { category: string, specifications: [Array] },
      { category: string, specifications: [Array] },
      { category: string, specifications: [Array] },
      { category: string, specifications: [Array] },
      { category: string, specifications: [Array] },
      { category: string, specifications: [Array] },
      { category: string, specifications: [Array] },
      { category: string, specifications: [Array] },
      { category: string, specifications: [Array] },
      { category: string, specifications: [Array] }
    ]
  }

  type topDevices = [
    {
      "category": string,
      "list": [Array]
    },
    {
        "category": string,
        "list": [Array]
      }
  ]