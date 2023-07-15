import githubLogo from "../images/github.svg";
import "./style.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import SendIcon from "@mui/icons-material/Send";
import pythonlogo from "../images/python.png";
import htmllogo from "../images/html.png";
import csslogo from "../images/css.png";
import jslogo from "../images/js.png";
import nodejslogo from "../images/nodejs.png";
import reactlogo from "../images/react.png";
import firebaselogo from "../images/firebase.png";

export function HomePage() {
  return (
    <>
      <div className="container">
        <div className="heading">
          <p id="lineone" className="headinglines">
            ORGANIZATION
          </p>
          <p id="linetwo" className="headinglines">
            Projects Dashboard
          </p>
          <div className="orgname">
            <Box textAlign="center">
              <TextField
                id="outlined-basic"
                label="Organization Name"
                variant="filled"
                sx={{
                  backgroundColor: "whitesmoke",
                  borderRadius: "20px",
                  marginTop: "5rem",
                  width: "30vw",
                }}
                InputProps={{
                  style: {
                    backgroundColor: "white",
                    fontSize: "1.5rem",
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: "grey",
                    fontSize: "1.5rem",
                  },
                }}
              />
            </Box>
            <Stack>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#FF6B34",
                  borderRadius: "20px",
                  marginTop: "5rem",
                  marginLeft: "2rem",
                  width: "10vw",
                  height: "7vh",
                  fontSize: "1.1rem",
                }}
                endIcon={<SendIcon />}
              >
                Continue
              </Button>
            </Stack>
          </div>
        </div>

        {/* <div className="image">
          <img src={githubLogo} alt="Github Logo" />
        </div> */}
      </div>

      <div className="aboutus">
        <div className="aboutusbox" id="aboutusleft">
          <img src={githubLogo} alt="Github Logo" id="aboutus_billi_logo" />
        </div>
        <div className="aboutusbox" id="aboutusright">
          Behold the masterpieces from our brilliant contributors, a spectacular
          collection of ongoing projects directly fetched from Github. Be amazed
          by the relentless commits, issues, and pull requests!
        </div>
      </div>

      <div className="techstackheading">
        
        <p className="techstackheading_p">Technologies Used</p>
        <div className="techstack">
          <div className="tech">
            <img src={pythonlogo} alt="Python Logo" className="techimg" />
          </div>
          <div className="tech">
            <img src={htmllogo} alt="HTML Logo" className="techimg" />
          </div>
          <div className="tech">
            <img src={csslogo} alt="CSS Logo" className="techimg" />
          </div>
          <div className="tech">
            <img src={jslogo} alt="JS Logo" className="techimg" />
          </div>
          <div className="tech">
            <img src={nodejslogo} alt="NodeJS Logo" className="techimg" />
          </div>
          <div className="tech">
            <img src={reactlogo} alt="React Logo" className="techimg" />
          </div>
          <div className="tech">
            <img src={firebaselogo} alt="Firebase Logo" className="techimg" />
          </div>
          <div className="blob"></div>
        </div>
      </div>

      <div className="top_contributors">
        <p>Top Contributors</p>
        <div className="top_contributors_content">
          <div className="top_contributors_content_1">
            {/* <ContributorContent
              src="https://avatars.githubusercontent.com/u/2770071?v=4"
              name="IPS"
              contri="1000"
              cl="card1"
            />
            <ContributorContent
              src="https://avatars.githubusercontent.com/u/2770071?v=4"
              name="MS"
              contri="10000"
              cl="card2"
            />
          </div>
          <div className="top_contributors_content_2">
            <ContributorContent
              src="https://avatars.githubusercontent.com/u/2770071?v=4"
              name="IPS"
              contri="1000"
              cl="card3"
            />
            <ContributorContent
              src="https://avatars.githubusercontent.com/u/2770071?v=4"
              name="IPS"
              contri="1000"
              cl="card4"
            /> */}
          </div>
          <div className="blob"></div>
        </div>
      </div>
      <div className="allprojects">
        <div className="allprojects_table">
          <table>
            <thead>
              <td>Project Name</td>
              <td>Started On</td>
              <td>Commits</td>
              <td>Issues & Pull Requests</td>
              <td>Top Contributor</td>
            </thead>

            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="footer">
        <div className="footercontent">
          <p>Developed By: Ishpuneet Singh, Mankirat Singh, Akshit Gupta</p>
          <p>Do Give A Star On Our Github Account</p>
        </div>
      </div>
    </>
  );
}
