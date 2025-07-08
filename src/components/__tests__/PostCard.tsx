import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { PostCard } from "../PostCard";

describe("PostCard", () => {
  const post = {
    id: 1,
    title: "Test Title",
    body: "Test Body",
    userId: 1,
  };

  it("renders title and body", () => {
    render(<PostCard post={post} />);
    expect(screen.getByText(/test title/i)).toBeInTheDocument();
    expect(screen.getByText(/test body/i)).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<PostCard post={post} onClick={handleClick} />);
    fireEvent.click(screen.getByText(/test title/i));
    expect(handleClick).toHaveBeenCalled();
  });
});
