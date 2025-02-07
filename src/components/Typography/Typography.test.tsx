import { render, screen } from "@testing-library/react";
import Typography from "./Typopgraphy";

describe('Typography', () => {
    it('renders', async () => {
        render(<Typography>Hello World</Typography>)

        expect(await screen.findByText(/Hello World/)).toBeVisible()
    });

    it('changes tag to heading 1', async () => {
        render(<Typography as="h1">Hello world</Typography>);

        expect(await screen.findByRole('heading', {
            name: /Hello world/
        }))
    });
});
