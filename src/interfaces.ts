interface malt {
  forEach(arg0: (element: any) => void): unknown;
  name: string;
  amount: {
    value: number;
    unit: string;
  };
}

interface hops {
  forEach(arg0: (element: any) => void): unknown;
  0: {
    name: string;
    amount: {
      value: number;
      unit: string;
    };
    add: string;
    attribute: string;
  };
}
export interface Exempel {
  image_url: string;
  name: string;
  id: number;
  description: string;
  abv: string;
  ingredients: {
    hops: hops;
    malt: malt;
    yeast: string;
  };
}
