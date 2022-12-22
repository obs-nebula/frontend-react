grep "ScopeSpans" out.log
if [ $? -eq 0 ]; then
  echo "Traces found"
  exit 0
else
  echo "Traces not found"
  exit 1
fi
