// // import React, {Component} from 'react';

// // class CheckBox extends Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = {
// //             checked: this.props.checked
// //         };
// //     }

// //     handleChange(e) {
// //         const {checked} = e.target;

// //         this.setState({checked});
// //         this.props.onChange(checked);
// //     }

// //     render() {
// //         return (<input type="checkbox" checked={this.state.checked} onChange={this.handleChange.bind(this)}/>);
// //     }
// // }

// // export default CheckBox;

// import React, { Component } from 'react';

// class CheckBox extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       checked: this.props.checked, // Initial checkbox state
//     };
//   }

//   handleChange(e) {
//     const { checked } = e.target;

//     // Show confirmation dialog
//     if (window.confirm('Are you sure you want to mark this task as Completed?')) {
//       // If confirmed, mark task as completed
//       this.setState({ checked: true }); // Mark as completed (checked = true)
//       this.props.onChange(true); // Notify parent of completion status
//     } else {
//       // Prevent checkbox state change if canceled
//       e.preventDefault();
//     }
//   }

//   render() {
//     return (
//       <input
//         type="checkbox"
//         checked={this.state.checked} // Reflect completed status
//         onChange={this.handleChange.bind(this)} // Handle changes with confirmation
//       />
//     );
//   }
// }

// export default CheckBox;


// // import React, { Component } from "react";

// // class CheckBox extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       checked: this.props.checked, // Initial checkbox state
// //       showDialog: false, // Whether to show the confirmation dialog
// //     };
// //   }

// //   handleCheckboxClick = () => {
// //     this.setState({ showDialog: true }); // Show confirmation dialog
// //   };

// //   handleConfirm = () => {
// //     this.setState((prevState) => ({
// //       checked: !prevState.checked, // Toggle the checkbox state
// //       showDialog: false, // Hide the dialog
// //     }));
// //     this.props.onChange(!this.state.checked); // Notify parent component
// //   };

// //   handleCancel = () => {
// //     this.setState({ showDialog: false }); // Hide the dialog without toggling the checkbox
// //   };

// //   render() {
// //     return (
// //       <div>
// //         {/* Checkbox */}
// //         <input
// //           type="checkbox"
// //           checked={this.state.checked}
// //           onClick={this.handleCheckboxClick}
// //           readOnly
// //         />

// //         {/* Confirmation Dialog */}
// //         {this.state.showDialog && (
// //           <div className="confirmation-dialog">
// //             <p>Are you sure you want to change the status of this task?</p>
// //             <button onClick={this.handleConfirm}>Confirm</button>
// //             <button onClick={this.handleCancel}>Cancel</button>
// //           </div>
// //         )}
// //       </div>
// //     );
// //   }
// // }

// // export default CheckBox;

import React, {Component} from 'react';

class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked
        };
    }

    handleChange(e) {
        const {checked} = e.target;

        this.setState({checked});
        this.props.onChange(checked);
    }

    render() {
        return (<input type="checkbox" checked={this.state.checked} onChange={this.handleChange.bind(this)}/>);
    }
}

export default CheckBox;

