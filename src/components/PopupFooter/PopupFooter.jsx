import React from 'react';
import '../PopupFooter/PopupFooter.scss';


 const PopupFooter = (props) => {
    const setOpenPopup = props.setOpenPopup;
    const inputData = props.inputData;
    const array = props.array;
    async function handleSubmit(e){
      e.preventDefault();
      if(inputData!==""){
      const result = array.map(obj => {
        const [firstKey, firstValue] = Object.entries(obj)[0];
        return { [firstKey]: firstValue };
      });
      const payload = {"segment_name": inputData,
        "schema":result}
        const response = await fetch('https://webhook.site/1e821fa9-37d5-4c20-b299-5c013d9f1b6d', {
          mode: 'no-cors',
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log(response,"lkdxvnkj,n");
        setOpenPopup(false);
    }
    }
  return (
    <div className='footer-container'>
        <div className='popup-btn-wrapper' onClick={handleSubmit}><button className='popup-save-btn'>Save the Segment</button></div>
        <div className='popup-btn-wrapper' onClick={()=>{
            setOpenPopup(false);
        }}><button className='popup-close-btn'>Cancel</button></div>
    </div>
  )
}
export default PopupFooter;