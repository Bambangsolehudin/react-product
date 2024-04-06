

function App() {
 
  const Button = (props) => {
    const {variant, children='bg-black-400'} = props
    return(<button className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}>
      {children}
    </button>)
  }

  return (
    <div className="App flex justify-center bg-blue-600 min-h-screen items-center">
      <div>
   
        <Button variant="bg-red-700"> Login </Button>
        <Button variant="bg-blue-400"> Logout </Button>
        <Button variant="bg-slate-900"> Haha </Button>

      </div>
    </div>
  )
}

export default App
