import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BookACallModal } from "../BookACallModal";

describe("BookACallModal component", () => {
  it("renders when isOpen is true", () => {
    render(<BookACallModal isOpen={true} onClose={() => {}} />);
    expect(screen.getByText(/Book a/i)).toBeInTheDocument();
    expect(screen.getByText(/Strategy Call/i)).toBeInTheDocument();
  });

  it("does not render when isOpen is false", () => {
    render(<BookACallModal isOpen={false} onClose={() => {}} />);
    expect(screen.queryByText(/Strategy Call/i)).not.toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", () => {
    const handleClose = jest.fn();
    render(<BookACallModal isOpen={true} onClose={handleClose} />);
    
    // Find the close button (the one with the 'close' material symbol)
    const closeButton = screen.getByText("close").closest("button");
    expect(closeButton).toBeInTheDocument();
    
    if (closeButton) {
      fireEvent.click(closeButton);
    }
    
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
