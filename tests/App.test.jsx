import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

import App from "../src/App.jsx";
import { NEED_CATEGORIES } from "../src/data/categories.js";
import { RESOURCES } from "../src/data/resources.js";

function renderAt(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

describe("Landing page", () => {
  it("renders both path cards", () => {
    renderAt("/");
    expect(screen.getByRole("heading", { name: /find help/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /i need help/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /i want to help/i })).toBeInTheDocument();
  });
});

describe("Need help directory", () => {
  it("renders a card for every curated category", () => {
    renderAt("/need-help");
    for (const cat of NEED_CATEGORIES) {
      expect(screen.getByRole("heading", { name: cat.name })).toBeInTheDocument();
    }
  });

  it("shows the safety category with the right blurb", () => {
    renderAt("/need-help");
    expect(screen.getByText(/24\/7 hotlines and shelters/i)).toBeInTheDocument();
  });
});

describe("Need help — category detail", () => {
  it("lists curated resources for food", () => {
    renderAt("/need-help/food");
    const firstResource = RESOURCES.food[0];
    expect(screen.getByRole("heading", { name: firstResource.name })).toBeInTheDocument();
  });

  it("includes the National Domestic Violence Hotline in safety", () => {
    renderAt("/need-help/safety");
    expect(screen.getByRole("heading", { name: /national domestic violence hotline/i })).toBeInTheDocument();
    expect(screen.getByText("800-799-7233")).toBeInTheDocument();
  });

  it("includes ORCA LIFT in transportation", () => {
    renderAt("/need-help/transportation");
    expect(screen.getByRole("heading", { name: /orca lift/i })).toBeInTheDocument();
  });

  it("falls back gracefully when a category id does not exist", () => {
    renderAt("/need-help/not-a-real-category");
    expect(screen.getByText(/we don't have that category yet/i)).toBeInTheDocument();
  });
});

describe("Give help page", () => {
  it("renders donate and volunteer sections", () => {
    renderAt("/give-help");
    expect(screen.getByRole("heading", { name: /vetted nonprofits/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /show up locally/i })).toBeInTheDocument();
  });

  it("lists ADRA in the general donate category", () => {
    renderAt("/give-help");
    expect(screen.getByRole("heading", { name: /adra/i })).toBeInTheDocument();
  });
});

describe("Good news page", () => {
  it("renders multiple good-news cards", () => {
    renderAt("/good-news");
    expect(screen.getByRole("heading", { name: /good is winning/i })).toBeInTheDocument();
    expect(screen.getAllByText(/source:/i).length).toBeGreaterThan(3);
  });
});

describe("Navigation", () => {
  it("clicking the I-need-help card lands on the need-help directory", async () => {
    const user = userEvent.setup();
    renderAt("/");
    await user.click(screen.getByRole("link", { name: /i need help/i }));
    expect(screen.getByRole("heading", { name: /what kind of help do you need/i })).toBeInTheDocument();
  });
});
