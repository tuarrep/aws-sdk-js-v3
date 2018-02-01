import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {PostCommentForComparedCommit} from '../model/PostCommentForComparedCommit';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {PostCommentForComparedCommitInput} from '../types/PostCommentForComparedCommitInput';
import {PostCommentForComparedCommitOutput} from '../types/PostCommentForComparedCommitOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class PostCommentForComparedCommitCommand implements __aws_types.Command<
    InputTypesUnion,
    PostCommentForComparedCommitInput,
    OutputTypesUnion,
    PostCommentForComparedCommitOutput,
    CodeCommitResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        PostCommentForComparedCommitInput,
        PostCommentForComparedCommitOutput,
        _stream.Readable
    >();

    constructor(readonly input: PostCommentForComparedCommitInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_types.Handler<PostCommentForComparedCommitInput, PostCommentForComparedCommitOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: PostCommentForComparedCommit
        };

        return stack.resolve(
            handler<PostCommentForComparedCommitInput, PostCommentForComparedCommitOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}