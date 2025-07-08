import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import { AddPostForm } from "../AddPostForm";

describe("AddPostForm", () => {
  it("renders the AddPostForm button", () => {
    const mockAddPost = vi.fn();
    render(<AddPostForm onAddPost={mockAddPost} />);
    expect(screen.getByText(/add new post/i)).toBeInTheDocument();
  });

  it("opens the dialog when button is clicked", () => {
    const mockAddPost = vi.fn();
    render(<AddPostForm onAddPost={mockAddPost} />);
    fireEvent.click(screen.getByRole("button", { name: /add new post/i }));
    expect(screen.getByText(/create new post/i)).toBeInTheDocument();
  });

  it("shows validation error if fields are empty", async () => {
    const mockAddPost = vi.fn();
    render(<AddPostForm onAddPost={mockAddPost} />);
    fireEvent.click(screen.getByRole("button", { name: /add new post/i }));
    fireEvent.click(screen.getByRole("button", { name: /create post/i }));
    await waitFor(() => {
      expect(
        screen.getByText(/please fill in both title and body fields/i)
      ).toBeInTheDocument();
    });
  });

  it("calls onAddPost when form is correctly submitted", async () => {
    const mockAddPost = vi.fn();
    render(<AddPostForm onAddPost={mockAddPost} />);

    fireEvent.click(screen.getByRole("button", { name: /add new post/i }));
    fireEvent.change(screen.getByLabelText(/title/i), {
      target: { value: "My Title" },
    });
    fireEvent.change(screen.getByLabelText(/body/i), {
      target: { value: "My Body" },
    });
    fireEvent.click(screen.getByRole("button", { name: /create post/i }));

    await waitFor(() => {
      expect(mockAddPost).toHaveBeenCalledWith({
        title: "My Title",
        body: "My Body",
      });
    });
  });
});
