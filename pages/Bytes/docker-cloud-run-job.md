---
title: Deploy Docker container as Cloud Run job
date: 2025-12-3
tag: docker, gcloud, cloud run
author: Corin
---

# Deploy a Docker container as a Google Cloud Run job

For a recent project tracking flight delays, I wanted to run a Python script that would collect data on a schedule, using Google Cloud. Here's the workflow for containerizing code with Docker and deploying it as a Cloud Run job:

## 1. Create a Dockerfile

In the project directory, [create a file](https://docs.docker.com/reference/dockerfile/) named `Dockerfile` that defines the container image:

```dockerfile
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["python", "main.py"]
```

## 2. Build and push the Docker image

First, configure Docker to authenticate with Google Cloud:

```bash
gcloud auth configure-docker
```

Then build the image locally, tagging it with the Google Container Registry path:

```bash
docker build -t gcr.io/project/job-name .
```

Finally, push the image to Google Container Registry:

```bash
docker push gcr.io/project/job-name
```

## 3. Create the Cloud Run job

With the image in the registry, create a Cloud Run job that references it:

```bash
gcloud run jobs create job-name \
  --image gcr.io/project/job-name \
  --region us-central1
```

The job can then be executed manually with `gcloud run jobs execute job-name`, or triggered on a schedule using Cloud Scheduler.
