// Write your code here.
import './index.css'

const BannerDetails = props => {
  const {eachBanner} = props
  const {headerText, description, className} = eachBanner
  return (
    <li className={className}>
      <h1 className="heading">{headerText}</h1>
      <p className="desc">{description}</p>
      <button className="button">Show More</button>
    </li>
  )
}

export default BannerDetails
