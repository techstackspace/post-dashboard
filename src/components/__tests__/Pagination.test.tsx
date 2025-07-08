import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { Pagination } from "../Pagination";

describe("Pagination", () => {
  const defaultProps = {
    currentPage: 2,
    totalPages: 5,
    totalItems: 50,
    itemsPerPage: 10,
    onPageChange: vi.fn(),
    onItemsPerPageChange: vi.fn(),
  };

  it("displays correct range and total items", () => {
    render(<Pagination {...defaultProps} />);
    expect(screen.getByText(/showing 11-20 of 50 posts/i)).toBeInTheDocument();
  });

  it("disables Previous button on first page", () => {
    render(<Pagination {...defaultProps} currentPage={1} />);
    expect(screen.getByRole("button", { name: /previous/i })).toBeDisabled();
  });

  it("calls onPageChange when clicking Next", () => {
    render(<Pagination {...defaultProps} />);
    fireEvent.click(screen.getByRole("button", { name: /next/i }));
    expect(defaultProps.onPageChange).toHaveBeenCalledWith(3);
  });

  it("calls onItemsPerPageChange when selecting new value", () => {
    render(<Pagination {...defaultProps} />);
    const select = screen.getByRole("button", { name: /show:/i });
    fireEvent.click(select);
    fireEvent.click(screen.getByText("20"));
    expect(defaultProps.onItemsPerPageChange).toHaveBeenCalledWith(20);
  });
});
