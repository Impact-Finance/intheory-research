import styles from '../styles/admin.module.scss';

const Admin = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Admin Dev Object Upload</h2>
      <div className={styles.projectUpload}>
        <h3 className={styles.head}>Add Project</h3>
        <form className={styles.form}>
          <div>
            <label htmlFor="projectName">Project Name</label>
            <input
              id="projectName"
              name="projectName"
            />
          </div>
          <div>
            <label htmlFor="researcherId">Researcher ID</label>
            <input
              id="researcherId"
              name="researcherId"
            />
          </div>
          <div>
            <label htmlFor="projectTags">Tags (comma separated)</label>
            <input
              id="projectTags"
              name="projectTags"
            />
          </div>
          <div>
            <label htmlFor="imageKeywords">
              Image Generation Keywords (comma separated)
            </label>
            <input
              id="imageKeywords"
              name="imageKeywords"
            />
          </div>
          <div>
            <label htmlFor="coverImageId">Cover Image ID</label>
            <input
              id="coverImageId"
              name="coverImageId"
            />
          </div>
          <div>
            <label htmlFor="shortDescription">Short Description</label>
            <textarea
              name="shortDescription"
              id="shortDescription"
              cols={50}
              rows={5}
            />
          </div>
          <div>
            <label htmlFor="longDescription">Long Description</label>
            <textarea
              name="longDescription"
              id="longDescription"
              cols={50}
              rows={5}
            />
          </div>
          <div>
            <label htmlFor="fundingRaised">Funding Raised</label>
            <input
              id="coverImageId"
              name="coverImageId"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className={styles.researcherUpload}>
        <h3 className={styles.head}>Add Researcher</h3>
      </div>
      <div className={styles.artworkUpload}>
        <h3 className={styles.head}>Add Artwork</h3>
      </div>
    </div>
  );
};

export default Admin;
