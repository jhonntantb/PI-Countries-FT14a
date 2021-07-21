import React from "react";
import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react";
import ActivityCard from "../components/ActivityCard";



test("render whit name", () => {
    const name="senderismo"
    const component=render(<ActivityCard name={name}/>)
    //component.getByText("Actividad:senderismo")
    expect(component.container).toHaveTextContent("Actividad:senderismo")
})
test("render whit difficulty", () => {
    const difficulty=4
    const component=render(<ActivityCard difficulty={difficulty}/>)
    //component.getByText("Actividad:senderismo")
    expect(component.container).toHaveTextContent("Dificultad:4")
})
test("render whit duration", () => {
    const duration=15
    const component=render(<ActivityCard duration={duration}/>)
    //component.getByText("Actividad:senderismo")
    expect(component.container).toHaveTextContent("Duracion:15")
})
test("render whit season", () => {
    const season="spring"
    const component=render(<ActivityCard season={season}/>)
    //component.getByText("Actividad:senderismo")
    expect(component.container).toHaveTextContent("Estación:spring")
})