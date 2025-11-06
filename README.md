# Sample Action
This is a sample GitHub Action repository.

## How to Use

Create a workflow file in your repository's `.github/workflows` directory:

```yaml
name: Sample Action Workflow
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Create a Token
        uses: app63/sample-action@v1
      - name: Using the token
        run: |
            echo "Token is ${{ steps.sample-action.outputs.token }}"
```
