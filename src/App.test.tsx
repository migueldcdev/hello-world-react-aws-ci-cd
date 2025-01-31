import { expect, test } from "vitest"
import userEvent from "@testing-library/user-event";
import {render, screen} from '@testing-library/react'
import App from "./App"


test("Counter test", async () => {
    const user = userEvent.setup();
    render(<App />)    
    const counterButton = screen.getByRole("button");
    await user.click(counterButton);
    expect(counterButton.innerHTML).toBe("count is 1");    
})