import Contact from "../Contact"
import '@testing-library/jest-dom';

const { render , screen } = require("@testing-library/react")

//grouping test cases using describe
describe("contact us page test cases",()=>{

    test('should load contact us component',()=>{
        render(<Contact/>)

        const heading=screen.getByRole("heading");

        expect(heading).toBeInTheDocument();
    });

    test('should load button inside contact us component',()=>{
        render(<Contact/>)

        //const button=screen.getByRole("button");
        const button=screen.getByText("Submit");

        expect(button).toBeInTheDocument();
    });

    test('should load contact us component',()=>{
        render(<Contact/>)

        const inputt=screen.getByPlaceholderText('name');

        expect(inputt).toBeInTheDocument();
    });

    test('should load all input boxes of contact us component',()=>{
        render(<Contact/>)

        //const inputBoxes=screen.getByRole("textbox"); //throws an error because there are multiple textboxes

        //Querying
        const inputBoxes=screen.getAllByRole("textbox");

        //console.log(inputBoxes) //return an array of length 2 

        expect(inputBoxes.length).toBe(2);
    });
});
