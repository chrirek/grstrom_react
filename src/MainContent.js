import PropTypes from 'prop-types';
import React from 'react';

const MainContent = (props) =>

<div className="main-content">
  <div className="section1">
    <h1>Main Headline</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis lobortis quam id venenatis. Integer eget pulvinar elit. Nunc magna mauris, sollicitudin eget ex quis, sagittis pretium velit. Morbi eget tortor vel massa iaculis tincidunt in eget nunc. Curabitur ornare faucibus fringilla. Praesent magna neque, auctor ac euismod sed, suscipit sed lorem. Curabitur euismod tellus et nibh condimentum mollis. Phasellus eleifend semper augue, ut feugiat orci fringilla non. Cras vel ultricies eros. Sed sed ante a ante gravida efficitur quis non dui. Fusce sagittis ullamcorper metus et tempus.</p>
    <button onClick={props.onClickEvent}>Increment</button>
    <h1>{props.value}</h1>
  </div>
  <form>
    <label>
      Name:
      <input type="text" name="name" />
    </label>
    <input type="submit" value="Submit" />
  </form>
</div>

export default MainContent;

MainContent.propTypes = {
  value: PropTypes.number.isRequired,
  onClickEvent: PropTypes.func.isRequired
};
