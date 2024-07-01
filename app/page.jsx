import Feed from "@components/Feed"; 

function Home() {
  return (
    <section className="w-full flex-center flex-col"> 
      <h2 className="head_text text-center" > 
      Discover & Share 
      </h2 >
      <h1 className="orange_gradient text-7xl text-center max-md:text-6xl max-sm:text-5xl"> AI-Powered Prompts</h1>
       
      <p className="desc text-center">PromptPlace is a place for prompts where you can discover, create and share creative prompts!</p>

      <Feed/> 
    </section>
  )
}

export default Home