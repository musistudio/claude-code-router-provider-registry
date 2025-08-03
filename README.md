# Claude Code Router Provider Registry

This repository contains provider configurations for the Claude Code Router.

## Submitting a New Provider

To add a new provider to the registry:

1. Create a new JSON file in the `providers` directory with your provider's configuration. The file should include:
   - `name`: The provider's name
   - `api_base_url`: The base URL for the provider's API
   - `api_key`: The API key (keep empty)
   - `models`: An array of supported model names
   - `transformer`: Configuration for request/response transformation
2. Commit your changes with a descriptive message
3. Push your changes to your fork
4. Open a pull request to the main repository with a clear title and description
