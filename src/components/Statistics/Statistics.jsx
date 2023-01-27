import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css'
 function StatisitcList ({title,stats}){

    return (<section className={css.statistics}>

      {title?(<h2 className="title">{title}</h2>):(<h2></h2>)}
  
  <ul className={css.statlist}>
    {stats.map(({id,label,percentage})=>  
<li key={id} className={css.item} style={{backgroundColor:generateColor()}}>
      <span  className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}</span>
    </li>)}

  </ul>
</section>)

}
StatisitcList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
function generateColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16)
}
export default StatisitcList;