import '../src/index.css'

export const decorators = [
  (Story) => (
    <div style={{ margin: '1em' }}>
      <Story />
    </div>
  ),
]
