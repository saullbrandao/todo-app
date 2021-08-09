import { screen, render } from '@testing-library/react'
import { CheckBox } from '.'

describe('Checkbox Component', () => {
  it('shows the check icon when the box is checked', () => {
    render(<CheckBox checked id="1" onChange={() => null} />)

    expect(screen.getByRole('checkbox')).toBeChecked()
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
  it('does not show the check icon when the box is not checked', () => {
    render(<CheckBox checked={false} id="1" onChange={() => null} />)

    expect(screen.getByRole('checkbox')).not.toBeChecked()
    expect(screen.queryAllByRole('img')).toHaveLength(0)
  })
})
