# Sample Action
This is a sample GitHub Action repository.

## How to Use

Create a workflow file in your repository's `.github/workflows` directory:

```yaml
name: Sample Action Workflow
on: [push]

permissions:
  id-token: write  # Required to fetch OIDC tokens

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Create a Token
        uses: app63/sample-action@v1
        with:
          name: "Your Name"
          day: "Monday"
      - name: Using the token
        run: |
            echo "Token is ${{ steps.sample-action.outputs.token }}"
```
