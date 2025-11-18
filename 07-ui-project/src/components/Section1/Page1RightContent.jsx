import RightCard from './RightCard'

const Page1RightContent = (props) => {
  return (
    <div id='right' className='h-full flex flex-nowrap gap-10 overflow-x-auto rounded-4xl p-6 w-2/3'>
      {
        props.users.map(function(elem, idx){

          return <RightCard key={idx} color={elem.color} id={idx} img={elem.img} tag={elem.tag} intro={elem.intro} />
        })
      }
    </div>
  )
}

export default Page1RightContent
