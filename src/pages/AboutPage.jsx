import Card from "../shared/Card";

function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About this project</h1>
            <p>This is a react app to leave feedback for a product or service. </p>
            <p>Version 1.0.0</p>
        </div>
        <p>
            <a href="/">back to home</a>
        </p>
    </Card>
  )
}

export default AboutPage;