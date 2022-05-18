const NumberCommas =(num)=>num.replace(/\B(?=(\d{3})+(?!\d))/g,",")
export default NumberCommas