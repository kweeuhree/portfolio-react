import React from "react";

import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { contactsData, email } from "../src/data/contactsData";
import { Contacts } from "../src/sections/index";

const contacts = Object.values(contactsData);

describe("Contacts component", () => {
  test("renders each contact of Contacts section", () => {
    render(
      <MemoryRouter>
        <Contacts />
      </MemoryRouter>,
    );

    expect(screen.getByText(email)).toBeInTheDocument();

    const links = screen.getAllByRole("link");

    links.map((link, index) => {
      const contactURL = contacts[index].link.url;
      expect(link).toHaveAttribute("href", contactURL);
    });
  });
});
