// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
// Adds convenient custom matchers like .toBeInTheDocument()
import "@testing-library/jest-dom/extend-expect";

// setup next-router-mock https://github.com/scottrippey/next-router-mock
jest.mock("next/router", () => require("next-router-mock"));

import fetchMock from "jest-fetch-mock";
fetchMock.enableMocks();
