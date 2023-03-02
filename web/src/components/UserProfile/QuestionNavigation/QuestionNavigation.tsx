const Tab = ({ name, onClick, selected }) => {
  const style = selected
    ? 'border-b-4 border-punch font-condensed text-2xl text-punch'
    : 'text-2xl font-condensed'
  return (
    <button className={style} onClick={onClick}>
      {name}
    </button>
  )
}

const QuestionNavigation = ({ currentTab, onTabChange }) => {
  return (
    <div className="flex h-auto w-screen justify-evenly bg-bg">
      <Tab
        onClick={() => onTabChange('answered')}
        name="Answered Questions"
        selected={currentTab == 'answered'}
      />
      <Tab
        onClick={() => onTabChange('unanswered')}
        name="Unanswered Questions"
        selected={currentTab == 'unanswered'}
      />
      <Tab
        onClick={() => onTabChange('asked')}
        name="Questions They've Asked"
        selected={currentTab == 'asked'}
      />
    </div>
  )
}

export { QuestionNavigation }
