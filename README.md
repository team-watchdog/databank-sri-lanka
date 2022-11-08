# WatchDog Databank Project
![WatchDog Databank Project Logo](/public/logo.svg)

<aside>

🗳️ We are building a collaborative platform to create and collect key datasets.

</aside>

Our public institutions are horrible at data management. This is a fact known to most researchers, students, and journalists. If you browse through government websites for long enough, you can find a plethora of data. But the problem lies with how it is organized. Here are a set of problems we at WatchDog have to constantly deal with:


- Data is stuck inside poorly formatted PDF or PPT files.
- Data discovery happens almost by accident. Datasets are poorly organized and search functions are non-existent.
- Data is not machine-readable.
- The Government Open Data Portal exists ([https://data.gov.lk/](https://data.gov.lk/)) but hasn’t been updated in years making the portal practically useless.
- Bad data archiving practices/data disappearing into the void.

# Core Platform

## Everything happens on Github
The core platform, all datasets, governance, and discussions will take place inside a single repository on Github. Here’s a breakdown of our thinking:

- Simplicity

- By hosting everything on a simple repository on Github, we eliminate the need for

- External databases

- Implementing user management and authentication logic, administration interfaces, dataset management logic, etc.

- Contributions can happen through Pull Requests. This also comes with the ability to manage revisions, comments, and rejections.

- You can request a dataset by simply raising an issue on Github. For non-technical users and sake of consistency, we’ll create a simple form on the public-facing portal which utilizes the GitHub APIs.

- Transparency

- We noticed that the [https://data.gov.lk/](https://data.gov.lk/) portal has the ability for users to suggest and upload datasets. But there’s no transparency as to what happens to these requests or uploaded data waiting for approval. Utilizing Github’s Pull Request and Issues functionality, we can make sure that all of these contributions are visible to the public.

- Git provides us with an audit trail and shows who changed what and when.

- Resiliency

- If WatchDog seizes to exist as an organization, our community should be able to continue updating the portal without our direct involvement.

- This can happen in two ways:

1. Transferring ownership of the repository to a different organization (Action needed from the repository owner — Team WatchDog)

2. Forking the repository together with the core architecture and all underlying datasets (No action required on behalf of the repository owner)
  

# Contributing

## How can I add a dataset?

  

1. Clone the repository to your computer

```bash
git clone <address>
```

2. Create a new branch for your dataset. Use the branch naming convention `dataset-new/<dataset identifier>`

```bash

git checkout -b new-dataset/<dataset_identifier>

```

3. Create a new directory for your dataset inside `datasets/`

4. Add your files to the folder you created.

5. Use the [Meta Generator Tool](https://databank.watchdog.team/metadata-generator) to generate the metadata file for your dataset.

6. Copy the generate JSON structure and add it to a file named `meta.json` inside the directory you created.

7. Here’s some information you should include inside the `Notes` section:

1. About the dataset

2. Links to the original source and retrieval dates

3. Collection methodology and tools used

4. Copyright information

5. Contributor Information (Optional)

8. Commit your code

```bash
git commit -am "Insert commit notes here"
```

9. Push your changes to the repository

```bash
git push origin  new-dataset/<dataset_identifier>
```

10. Go to the branch on the GitHub web interface and create a Pull Request to the `main` branch

11. Members from our core team will review your Pull Request and let you know if there are any necessary changes.

12. When our core team approves your changes, the data portal will get updated with your dataset. Congratulations and thank you for your contribution! 🥳

  

## Caveats

  

- Files more than 20MB

- Upload files to a third-party service such as S3 and add the link to the `Notes` section of the Metadata file for the dataset.

  

# Running the project locally

  

### Prerequisites:

  

- NodeJS

  

### Steps

  

1. Run `yarn install`

2. Run `yarn dev`

3. Visit `http://localhost:3000`