import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { PrimaryButton } from './PrimaryButton';

describe('<PrimaryButton />', () => {
  it('should render the button and respond to user click event', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<PrimaryButton onClick={onClick}>Click me</PrimaryButton>);

    expect(screen.queryByRole('button', { name: 'Click me' })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Click me' }));

    expect(onClick).toHaveBeenCalled();
  });

  it('should render the button as disabled when disabled=true and not respond to user click event', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <PrimaryButton disabled onClick={onClick}>
        Click me
      </PrimaryButton>
    );

    expect(screen.getByRole('button', { name: 'Click me' })).toBeDisabled();

    await user.click(screen.getByRole('button', { name: 'Click me' }));

    expect(onClick).not.toHaveBeenCalled();
  });
});
