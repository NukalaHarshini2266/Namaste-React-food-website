import Header from "../Header"
import { Provider } from "react-redux";
import { fireEvent, render ,screen} from "@testing-library/react";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("should load header component with a login button",()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
    );

    //const loginButton=screen.getByRole("button"); //for one button

    //if multiple buttons are there
    const loginButton=screen.getByRole("button",{name:"Login"});

    //const loginButton=screen.getByText("Login");

    expect(loginButton).toBeInTheDocument();
})

it("should load header component with a cart items 0",()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
    );

    
    //const cartItems=screen.getByText("cart(0 items)");

    //for not exact string we can write as regex

    const cartItems=screen.getByText(/cart/);


    expect(cartItems).toBeInTheDocument();
})

it("should change login button to logout on click",()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
    );

    const loginButton=screen.getByRole("button",{name:'Login'});

    fireEvent.click(loginButton);

    const logoutButton=screen.getByRole("button",{name:'Logout'});

    expect(logoutButton).toBeInTheDocument();
})