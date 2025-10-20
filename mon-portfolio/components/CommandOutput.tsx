interface CommandOutputProps {
  output: string;
}

export default function CommandOutput({ output }: CommandOutputProps) {
  return <div className="pl-6 text-green-400 font-mono">{output}</div>;
}
