/**
 * Custom semantic-release analyzeCommits plugin.
 * Determines the release type from the RELEASE_TYPE environment variable,
 * which is set by the workflow based on PR labels (release:major/minor/patch).
 */
async function analyzeCommits(pluginConfig, context) {
  const releaseType = context.env.RELEASE_TYPE;

  if (!releaseType || releaseType === 'none') {
    context.logger.log('No release label found on merged PRs. Skipping release.');
    return null;
  }

  context.logger.log(`Release type determined from PR labels: ${releaseType}`);
  return releaseType;
}

module.exports = { analyzeCommits };
