import background from "../images/jumbotron.png";

const styles =  {
    container:{
        display: 'flex',
        repeat:'no-repeat',
        alignItems:'left',
        justifyContent: 'left',
        width: '100vw',
        boarder: 0
        
    },
    heading: {
        boarder: '0px',
        fontFamily:'Helvetica Neue',
        fontSize: 50
    },
    jumbotron: {

        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '50vh'
    },



    button:{
        backgroundColor:'#981A1A',
        color:'white',
        height: 100,
        width: 150,
        borderRadius: '24px',
        marginTop: 50,
        marginLeft: 50,

    },
  
    hours: {
       
        justifyContent: 'center',
        fontFamily:'Helvetica Neue',
        fontSize: 20,
        color:'#981A1A',
        width: 500,
        height: 250,
    },
    hoursTitle: {
        marginTop: 20,
        fontFamily:'Helvetica Neue',
        fontSize: 30,
        color:'#981A1A'
    },

 
    map:{

        width: 350,
        height: 200,
    }

}

export default styles;