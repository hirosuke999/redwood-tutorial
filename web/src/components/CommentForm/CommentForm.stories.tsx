import type { Meta, StoryObj } from '@storybook/react'
import type {
  CreateCommentMutation,
  CreateCommentMutationVariables,
} from 'types/graphql'

import CommentForm from './CommentForm'

const meta: Meta<typeof CommentForm> = {
  component: CommentForm,
  tags: ['autodocs'],
  play: () => {
    mockGraphQLMutation<CreateCommentMutation, CreateCommentMutationVariables>(
      'CreateCommentMutation',
      (variables, { ctx }) => {
        const id = Math.floor(Math.random() + 1000)
        ctx.delay(1000)

        return {
          createComment: {
            id,
            name: variables.input.name,
            body: variables.input.body,
            createdAt: new Date().toISOString(),
          },
        }
      }
    )
  },
}

export default meta

type Story = StoryObj<typeof CommentForm>

export const Primary: Story = {}
