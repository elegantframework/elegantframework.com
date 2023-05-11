import React from "react";
import renderer from 'react-test-renderer';
import SplashHeader from "./SplashHeader";

describe("Splash Header component", () => {
    it('renders a splash header component properly', () => {
        const header = renderer
        .create(
            <SplashHeader
                beams={false}
                gitHubUrl="hello.com"
                appName="Jest Test"
            />
        )
        .toJSON();
        expect(header).toMatchSnapshot();
    });
});