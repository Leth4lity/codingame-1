read N

declare -a horses
declare -a sort

lowest=10000000; last=-1

for ((i; i < N ; i++)); do
    read horse
    sort[horse]=1
done

if [[ ${#sort[@]} -ne N ]]; then lowest=0;
else
    for i in ${!sort[@]}; do
        if [[ $last -ne -1 && $(($i - $last)) -lt $lowest ]]; then 
            lowest=$(($i - $last)); fi
        last=$i
    done
fi

echo $lowest