Push Code: You push your code to the GitHub repository.
Trigger Workflow: GitHub triggers the workflow defined in the .github/workflows/*.yml file.
Checkout Code: The latest code is checked out.
Set Up Environment: Required environments are set up (e.g., Node.js).
Build Docker Image: The Docker image is built using the provided Dockerfile.
Run Docker Container: The action runs inside the container, executing the specified tasks.
Upload Artifacts / Notifications: Any defined artifacts are uploaded, and notifications may be sent.
Log Results: GitHub logs the results of the workflow execution.
