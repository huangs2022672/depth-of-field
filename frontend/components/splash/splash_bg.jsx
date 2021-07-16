import React from 'react'

class SplashBG extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bgSplash: splash0,
      count: 0,
      bgImages: [
        splash0,
        splash1,
        splash2,
        splash3,
        splash4,
      ],
      BGCycle: null
    }
  }

  componentDidMount() {
    const numImages = 5
    this.state.BGCycle = setInterval(() => {
      this.state.count = (this.state.count + 1) % numImages
      this.setState({bgSplash: this.state.bgImages[this.state.count]})
    }, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.state.BGCycle)
  }

  render() {

    return (

      <div className="splash-bg">
        {/* <div className="splash-bg-img"
        alt="depth of field splash background"/> */}


        <div className="splash-bg-img"
        alt="depth of field splash background"
        style={{backgroundImage: `url(${this.state.bgSplash})`}}
        />


        {/* <img className="splash-bg" src={window.splash1} alt="sunshine on fields" /> */}
      </div>
    )
  }
}

export default SplashBG;
