import {render, screen} from "@testing-library/react"
import RestaurantCard,{withpromotedlabel} from "../RestaurantCard"
import mainData from "../../utils/mainData.json"
import "@testing-library/jest-dom"

it("should render RestaurantCard component with props data",()=>{
    
    const restaurant =
        mainData.data.cards
        .find((item) => item?.card?.card?.id?.includes("restaurant_grid"))
        ?.card?.card?.gridElements?.infoWithStyle?.restaurants[1];

    render(<RestaurantCard resData={restaurant} />);

    const name=screen.getByText("KFC");

    expect(name).toBeInTheDocument();

});

it("should render promoted label when restaurant is promoted", () => {

  const RestaurantCardPromoted = withpromotedlabel(RestaurantCard);

  const restaurant =
    mainData.data.cards
      .find((item) => item?.card?.card?.id?.includes("restaurant_grid"))
      ?.card?.card?.gridElements?.infoWithStyle?.restaurants[0];

  render(<RestaurantCardPromoted resData={restaurant} />);

  if (restaurant.info.promoted) {
    const label = screen.getByText("promoted");
    expect(label).toBeInTheDocument();
  }
});